# Google Calendar API With Lambda

## How is serverless implemented for this app??

This application will be using a serverless function in order to provide the user with an authentication token.

When the OAuth consent screen is opened and cridentials are authenticated, the serverless function will return
an authorization token to the user which then can be used against the Google Calendar API for fetching and
sending data back to the front-end
