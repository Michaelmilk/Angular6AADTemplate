import { LogLevel } from "../../src/app/core/enums";

export const environmentDev = {
    serverBaseUrl: "",
    logLevel: LogLevel.Trace,
    enableAAD: true,
    adalConfig: {
		tenant: "",
		clientId: "", //registered application's Id (GUID)
        postLogoutRedirectUri: "http://localhost:8060/logout",
        endpoints: {
            'https://graph.microsoft.com': '00000003-0000-0000-c000-000000000000'//the value is the "resourceAppId" in "requiredResourceAccess"
          }
	}
};