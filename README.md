# DBank DeFi App

DBank is a cutting-edge decentralized finance (DeFi) application created using a combination of Motoko for the backend, JavaScript (JS) for frontend interactivity, and HTML for the user interface. This DeFi app empowers users to manage their financial assets with ease, providing real-time access to their bank balance, enabling top-ups and withdrawals, and even incorporating a compound interest feature to help users grow their savings.

## Features

- **User-Friendly Interface:** DBank features an intuitive and user-friendly HTML-based interface for a seamless user experience.

- **Real-Time Balance Display:** The application provides real-time updates on the user's bank balance, ensuring they always have access to their financial information.

- **Top-Up and Withdrawal:** Users can easily perform top-up and withdrawal transactions directly within the app.

- **Compound Interest:** DBank calculates and displays the compound interest earned on the user's bank balance, helping their savings grow over time.

- **Security:** The app prioritizes security, utilizing Motoko for robust smart contract development to safeguard user funds.

- **Transaction History:** Users can review their transaction history, offering transparency and insight into their financial activities.

- **Cross-Platform Compatibility:** DBank is accessible on various devices and browsers, making it convenient for users to manage their finances.

- **Customizable Preferences:** Users can tailor the app to their specific financial goals, including adjusting interest compounding frequency and notification preferences.

## Getting Started

To get started with DBank, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>

   ```bash
# Navigate to the project folder
cd dbank-defi-app
```


 ```bash
# Install necessary dependencie
#  If you're using Node.js for frontend development:
npm install
```


##References

- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/references/motoko-ref/)
- [JavaScript API Reference](https://erxue-5aaaa-aaaab-qaagq-cai.raw.icp0.io)



## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```

Once the job completes, your application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

Which will start a server at `http://localhost:8080`, proxying API requests to the replica at port 4943.

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
