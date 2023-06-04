var axios = require('axios');
module.exports = function(RED) {
    function OpenAIGptNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var globalConfig = RED.nodes.getNode(config.config);
        node.on('input', async function(msg, send, done) {
            const apikey = globalConfig.credentials.apikey;
            const model = config.model;
            const role = config.role;
            const message = config.message;
            const outputVariable = config.outputVariable;
            const outputVariableType = config.outputVariableType;
            console.log("Apikey:"+apikey);
            console.log("Model:"+model);
            console.log("Role:"+role);
            var data = {
                'model': model,
                'messages': [{'role': role, 'content': message}]
            };

            console.log("Data:"+JSON.stringify(data));

            var requestConfig = {
                method: 'post',
                url: `https://api.openai.com/v1/chat/completions`,
                headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': `Bearer ${apikey}`
                },
                data : data
            };

            try {
                let response = await axios(requestConfig);
                console.log("Response:"+JSON.stringify(response.data));
                let nodeResponse=response.data.choices[0]['message']['content']
                console.log("outputVariableType:"+outputVariableType)
                console.log("outputVariable:"+outputVariable)
                if (outputVariableType === 'msg') {
                    RED.util.setMessageProperty(msg, outputVariable.trim(), nodeResponse);
                } else if (outputVariableType === 'flow') {
                    node.context().flow.set(outputVariable.trim(), nodeResponse);
                } else if (outputVariableType === 'global') {
                    node.context().global.set(outputVariable.trim(), nodeResponse);
                }
                
                send(msg);
            } catch(error) {
                if (done) {
                    done(error);
                } else {
                    node.error(error, msg);
                }
            }
        });
    }
    RED.nodes.registerType("openai-gpt", OpenAIGptNode);
    
    function OpenAIConfigNode(n) {
        console.log("n:"+JSON.stringify(n));
        RED.nodes.createNode(this,n);
        this.name = n.name;
        console.log("this object:"+JSON.stringify(this));
        console.log("Name from OpenAIConfigNode:"+this.name);
        this.apikey = this.credentials.apikey;
        console.log("ApiKey from OpenAIConfigNode:"+this.apikey);
    }

    RED.nodes.registerType("openai-config", OpenAIConfigNode, {
        credentials: {
            apikey: {type:"password"}
        }
    });
}
