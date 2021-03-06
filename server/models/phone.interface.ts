import { mongoose } from '../config/database/database';
import { IBaseModel, IBaseModelDoc } from "./index";
import * as enums from "../enumerations";
import { IOwnership } from "./ownership.interface";
import { IImage } from './image.interface';


export interface IPhone {
    phone: string,    
    type: enums.PhoneType
}