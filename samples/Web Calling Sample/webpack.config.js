
const CommunicationIdentityClient = require("@azure/communication-administration").CommunicationIdentityClient;
const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = require("./config.json");

if(!config || !config.connectionString || config.connectionString.indexOf('endpoint=') === -1)
{
    throw new Error("Update `config.json` with connection string");
}

const communicationIdentityClient = new  CommunicationIdentityClient(config.connectionString);


module.exports = {
    devtool: 'inline-source-map',
    mode: 'development',
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        open: true,
        before: function(app, server, compiler) {
            var bodyParser = require('body-parser');
            app.use(bodyParser.json());
            app.post('/tokens/provisionUser', bodyParser.json(), async (req, res) => {
                try {
                    let communicationUserId;
                    if (!req.body.userIdentity) {
                        communicationUserId = await communicationIdentityClient.createUser();
                    } else {
                        communicationUserId = { communicationUserId: req.body.userIdentity }
                    }
                    const tokenResponse = await communicationIdentityClient.issueToken(communicationUserId, ["voip"]);
                    res.json(tokenResponse);
                } catch (error) {
                    console.log(error);
                }
            });
        }
    }
};
