# Environment variables

- `PAYTM_KEY`
- `PAYTM_TEST_KEY`
- `BROWSERSTACK_USER`
- `BROWSERSTACK_TOKEN`
- `FIREBASE_TOKEN`
- `CODECOV_TOKEN`
- `CYPRESS_TOKEN`

If you are a dev, you will only require dummy values for the above except for Browserstack which only works with valid values. Put them in `.env/env.sh` and do a `source .env/env.sh` to import them.