# Spool Group Calling Sample

This is a sample application to show how the ACS Calling Web SDK can be used to build a group calling experience. The client-side application is a React based user interface which uses Redux for handling complex state while leveraging Microsoft Fluent UI for how things look. Powering this front-end is a C# web application powered by ASP.net Core to connect this application with Azure. 

![Homepage](/media/homepage-sample-calling.png)

#### For additional documentation on this sample visit Azure Docs [here](TODO)

## Prerequisites

1. [Node.js (8.11.2 and above)](https://nodejs.org/en/download/)
2. [Visual Studio (2017 and above)](https://visualstudio.microsoft.com/vs/)
3. [.Net Core 2.2](https://dotnet.microsoft.com/download/dotnet-core/2.2) 
*Make sure to install version that corresponds with your visual studio instance (32 vs 64 bit)

## Code structure

* ./ClientApp: frontend client
		./ClientApp/src
			./ClientApp/src/Components : React components to help build the client app calling experience
			./ClientApp/src/Containers : Connects the redux functionality to the React components
			./ClientApp/src/Core : Containers a redux wrapper around the ACS Web Calling SDK
		./ClientApp/src/index.js : Entry point for the client app
* ./Service.NET: backend server code in .Net
		./Service.Net/controllers : Endpoint for client app to get a token to use with the ACS Web Calling SDK
		./Service.Net/SpoolServiceClient : Functionality for getting the spool token
		./ClientApp/src/Program.cs : Entry point for the server app

# Locally deploying the service & client app

The grouping calling sample is essentially two "applications" the ClientApp and the Service.Net app.
When we want to deploy locally we need to start up both applications. When the server app is visited
from the browser, it will use the locally deployed ClientApp for the user experience.

## Before running the sample for the first time
1. `git clone` the repo
2. Go to the ClientApp folder and run `npm run setup-vsts-auth`
3. Run `npm install`
4. Get the primaryConnectionString using steps provided in [How to create a spool resource](https://skype.visualstudio.com/SCC/_wiki/wikis/SCC.wiki/9198/Dogfooding). 
5. Once you get the Connection String you will append the *resourceId* (found on the Azure portal, in the Azure Resource overview page) in the following format: `{connectionString} + ";issuer=" + {resourceId}`

	`endpoint=https://resource.westus.communications.azure.com/;accesskey=abababababababababab;issuer=b709bc51-aaaa-aaaa-bbbb-a1bcf478819e`
	
6. Add the combined string to the **appsetting.json** file as the *ResourceConnectionString*.

## Local run
1. Go to the ClientApp folder
2. npm install
3. npm run start

4. Go to the Service.NET folder
5. Open the `SpoolCPaaSSamples.sln` solution in Visual Studio
6. Run the `ServiceSampleDotNet` project. 

* The browser will open at localhost:5000 (where the node is deploying the client app)

### Troubleshooting

1. Solution doesn\'t build, it throws errors during NPM installation/build
>
> Clean/rebuild the C# solution
>
2. Sample page returns 500 in browser
>
> Make sure you are running the ClientApp. Run 'npm run start' from ClientApp folder

## Publish to Azure

1. Right click the `ServiceSampleDotNet` project -> publish
2. Create a new publish profile and select your app name, Azure subscription, resource group and etc.
3. Before publish, add your connection string with `Edit App Service Settings`, and fill in `ResourceConnectionString` as key and connection string (copy from appsettings.json) as value

# Additional Reading

- [Azure Communication Preview](https://github.com/Azure/communication-preview) - To learn more about the  calling web sdk
- [Redux](https://redux.js.org/) - Client-side state management
- [FluentUI](https://developer.microsoft.com/en-us/fluentui#/) - Microsoft powered UI library
- [React](https://reactjs.org/) - Library for building user interfaces
- [ASP.net Core](https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-3.1) - Framework for building web applications