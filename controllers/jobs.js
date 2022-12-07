const {StatusCodes} = require('http-status-codes')
const Job = require('./../models/Jobs')
const {BadRequestError, NotFoundError} = require('./../errors/')

const getJob = async (req,res)=>{
    //from token get userId passed from authenticate middleware
    const {params: {jobId}, user: {userId}} = req
    const job = await Job.findOne({_id: jobId, createdBy: userId})

    if(!job){
        throw new NotFoundError(`No job with id: ${jobId}`)
    }

    res.status(StatusCodes.OK).json({job})
}

const getAllJobs = async (req,res)=>{
    //filter the jobs by userId to get job(s) specific to a user
    const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs, count: jobs.length});
}

const createJob = async (req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async (req,res)=>{
    //1.Update job of a single user
    const {body: {company, position}, params: {jobId}, user: {userId}} = req

    if(company === '' || position === ''){
        throw new BadRequestError(`Company or position field cannot be empty`)
    }

    const job = await Job.findOneAndUpdate({_id: jobId, createdBy: userId}, req.body, {new: true, runValidators: true})

    if(!job){
        throw new NotFoundError(`No job with id:${jobId}`)
    }
     
    res.status(StatusCodes.OK).json({job})
}

const deleteJob = async (req,res)=>{
    
    //1.delete job of a single user
    const {params: {jobId}, user: {userId}} = req

    const job = await Job.findOneAndRemove({_id: jobId, createdBy: userId})

    if(!job){
        throw new NotFoundError(`No job with id: ${jobId}`)
    }

res.status(StatusCodes.OK).send(`Job deleted successfully`);
}

module.exports = {
    getJob,
    getAllJobs,
    createJob,
    deleteJob,
    updateJob
}