const express = require('express')
const {Blog} = require('../models')

async function index(req,res,next) {
	try {
    // get all people
    res.json(await Blog.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Blog.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE SHOW ACTION
async function detail(req,res,next) {
    try {
        // send one person
        res.json(await Blog.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// ... the remaining people controller actions will go below 

// PEOPLE DESTROY ACTION 

async function destroy(req,res,next) {
    try {
        // send one person
        res.json(await Blog.findByIdAndRemove(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// PEOPLE UPDATE ACTION

async function update(req,res,next) {
    try {
        // send one person
        res.json(await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};



// EXPORT Controller Action
module.exports = {
	index,
	create,
	getOne: detail,
    delete: destroy,
    update
}