# Node-RED OpenAI GPT Node

![npm](https://img.shields.io/npm/v/1.0.0)

A Node-RED custom node that allows interaction with OpenAI's powerful GPT models including gpt-4, gpt-4-0314, gpt-4-32k, gpt-4-32k-0314, gpt-3.5-turbo, gpt-3.5-turbo-0301.

![OpenAI Node-RED node](https://path/to/your/image)

## 🚀 Features

- **Simple to use:** With a user-friendly interface, easily interact with OpenAI models within Node-RED.
- **Flexibility:** Choose among different GPT models to fit your needs.
- **Control:** Customize the role and the message you send to the model.
- **Variable output:** Flexibility to store the output in a msg, flow, or global variable of your choice.

## 📦 Installation

This node can be installed directly from the Node-RED's palette manager, or via npm:

```bash
npm install node-red-contrib-openai-gpt
```

Once installed, restart your Node-RED instance and you should have the OpenAI GPT node available in your palette, and ready to be used!

## 🛠 Usage
- **Drag and drop:** Pull the OpenAI GPT node into your flow.
- **Configure:** Double-click on it and configure the following:
- **Model:** Choose the OpenAI model to use. Default is 'gpt-3.5-turbo'.
- **Role:** Specify the role to play while interacting with the model.
- **Message:** Set the message content to send to the model.
- **Output Variable:** Set the property (msg/flow/global) where the response from the API is stored. Default is 'msg.payload'.
- **Connect:** Connect the node to your flow and deploy!
- **Result:** The API response (payload.choices[0]['message']['content']) will be set to the specified output variable.

## ⚠️ Note

Interacting with OpenAI API would cost as per the pricing policy of OpenAI. Respect the usage policies set by OpenAI. Visit OpenAI Pricing for more details.

## 💖 Support
Please ⭐ this repository if this project helped you! Any feedbacks and contributions are welcome!


