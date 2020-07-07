# Requirements

1. Visual Studio 2019 (16.3+)
2. Authenticating on the private NuGet feed. Considering that the packages are published in a private feed, before the first build, you need to go "Manage NuGet Packages for Solution" from the "Solution Explorer" window, switch to "github" feed on the top right section and authenticate with your username and [a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) that has `read:packages` scope.
