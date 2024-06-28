
import { Schema, model } from "mongoose";

const statementSchema = new Schema({

    incidentType: {enum: ['non-criminal', 'criminal']},
    civilianStatus: {enum: ['suspect', 'complainant', 'witness']},
    statement: {type: String},
    caseStatus: {enum: [ 'open', 'closed']},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}

})

export const StatementModel = model('statement', statementSchema)

