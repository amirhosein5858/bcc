import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "./db";
type Social = {
  link: string;
  id: number;
};

export default function social(
  req: NextApiRequest,
  res: NextApiResponse<Array<Social>>
) {
  if(req.method == 'POST'){
    CreateSocial(req , res)
    return;
  }
  if(req.method == 'GET'){
    GetSocials(req , res)
    return;
  }
  if(req.method == 'DELETE'){
    DeleteSocial(req , res)
    return;
  }
  if(req.method == 'PUT'){
    UpdateSocial(req , res)
    return;
  }
  res.status(404).end()

}

const CreateSocial = (
  req: NextApiRequest,
  res: NextApiResponse<Array<Social>>
) => {

}

const UpdateSocial = (
  req: NextApiRequest,
  res: NextApiResponse<Array<Social>>
) => {

}

const DeleteSocial = (
  req: NextApiRequest,
  res: NextApiResponse<Array<Social>>
) => {

}


const GetSocials = (
  req: NextApiRequest,
  res: NextApiResponse<Array<Social>>
) => {
  try{
    db.find({}, (err: any, docs: Array<Social>) => {
      if (err) {
        res.status(500).end();
      } else {
        console.log({ docs });
        res.status(200).json(docs);
      }
    });
  }catch{
    res.status(500).end()
  }
}
