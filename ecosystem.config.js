module.exports = {
  apps: [
    {
      name: "coronastatus",
      script: "npm run start",
      instances: 1,
      increment_var: "PORT",
      env: {
        "PORT": 8080,
        "NODE_ENV": "production"
      },
      env_development: {
        "PORT": "8080",
        "NODE_ENV": "development"
      }
    },
  ]
}
