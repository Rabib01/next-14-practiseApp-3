"use server";

import connectMongo from "@/dbConnect/mongoConnect";
import User from "@/model/user";

export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const userData = { name, email };

  // ekhon kaaj hocche userData take dataBase e save kora !
  await connectMongo(); // eita call korle database er prothom connection ta hoilo !

  // insert into dataBase ! - application janena kon collection e data save korbo at this point !
  await new User(userData).save();

  // nextJs er kaaj khali data take e pathai daoa - all versions have their own way of saving to their respective dbs,
  // thisis the way how we save things to mongoDb

  console.log(formData.get("name"));
  console.log(formData.get("email"));
};

export const getUsers = async (formData) => {
  await connectMongo();

  // get users - mongoose theke kono kichu anar jinish gula eikhane korte hobe !
  const users = await User.find();
  return users;
};

// try catch diye wrap o kore rakhte pari - eigula error boundary diye wrap korle oikhane dhorte hobe !
// IMPORTANT - ACTIONS DOES NOT NEED TO BE JUST IN FORMS - ACTIONS CAN BE IN FUNCTIONS AS WELL !
