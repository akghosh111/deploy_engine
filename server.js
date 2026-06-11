import express from "express";

const managementApp = express();

const MANAGEMENT_API_PORT = process.env.MANAGEMENT_API_PORT ?? 8080

managementApp.get("/", (req, res) => {
    return res.json({ status: "Management APIs are up and running" });
});

managementApp.listen(MANAGEMENT_API_PORT, () => {
    console.log(`ManagementAPI is running on PORT ${MANAGEMENT_API_PORT}`);
});