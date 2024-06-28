import { StatementModel } from "../models/statement_model.js";


//function to store data in the database
export const addStatement = async (req, res) => {
  try {
    console.log("request", req.body);
    const addData = await StatementModel.create(req.body);
    res.status(200).send(addData)
    


  } catch (error) {
    console.log(error)

  }
};



export const updateStatement = async (req, res) => {
    try {
      
      const status = req.params.caseStatus
      console.log("request", status);
       const addData = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
       res.status(200).send(addData)
      
   
  
  
    } catch (error) {
      console.log(error)
  
    }
  };