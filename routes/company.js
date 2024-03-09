const express = require('express');
const connection = require('../config/connection');
const companyControllers = require('../controllers/companyControllers');
const router = express.Router();
router.post('/addcompany', async function(req, res, next) {
    await companyControllers.add_company(req, res);
});
router.get('/getcompany', async function(req, res, next) {
	await companyController.select_company(req, res)
});

router.put('/deletecompany', async function(req, res, next) {
	await companyController.deletecompany(req, res)
});



router.post('/getcompany', async function(req, res, next) {
	await companyController.Getcompany(req, res)
});

router.put('/updateC', async function(req, res, next) {
	await companyController.update_company(req, res)
});
module.exports = router;