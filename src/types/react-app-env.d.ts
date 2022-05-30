/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_FB_API_KEY: string
    REACT_APP_FB_AUTH_DOMAIN: string
    REACT_APP_FB_PROJECT_ID: string
    REACT_APP_FB_STORAGE_BUCKET: string
    REACT_APP_FB_MESSAGING_SENDER_ID: string
    REACT_APP_FB_APP_ID: string
  }
}
