import db from "../config/db.js";
import {Sequelize} from "sequelize";

export const Testimonial=db.define("testimoniales",{
    nombre:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    mensaje:{
        type:Sequelize.STRING
    },
});