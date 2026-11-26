"use server";

import connectMongo from "@/dbConnect/mongoConnect";
import User from "@/model/user";
import mongoose from "mongoose";
import { revalidatePath } from "next/cache";

// now we want to bring an additional argument here ! h0w ? hypothethical example - addUser er sathe wwe are trying to send a flag in the argument that the user has a status of being a pro user !
// we modify the addUser action in the form
export const addUser = async (flag, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const userData = { name, email };

  // ekhon kaaj hocche userData take dataBase e save kora !
  await connectMongo(); // eita call korle database er prothom connection ta hoilo !

  // this one is for debugging purposes
  console.log("MongoDB connection state:", mongoose.connection.readyState);

  // insert into dataBase ! - application janena kon collection e data save korbo at this point !
  await new User(userData).save();

  // nextJs er kaaj khali data take e pathai daoa - all versions have their own way of saving to their respective dbs,
  // thisis the way how we save things to mongoDb

  //   revalidate the users data - revalidate korle next js reload korbena but tole tole update kore dibe @! it will reload the data without reloading hte pagef !
  revalidatePath("/serveractions");
  //   now the user list is updating as soon as I have pressed submit - sertver action sudhu matro form e use korte hoi ta na - server actions can be used anywhere
  //  sob kisu koto easily hoye gelo without doing an api request !

  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(flag);
};

export const getUsers = async () => {
  try {
    await connectMongo();
    // get users - mongoose theke kono kichu anar jinish gula eikhane korte hobe !
    const users = await User.find().lean();
    console.log(users);
    console.log(users.length);

    return JSON.parse(JSON.stringify(users));
  } catch (err) {
    console.log(err);
  }
};

// try catch diye wrap o kore rakhte pari - eigula error boundary diye wrap korle oikhane dhorte hobe !
// IMPORTANT - ACTIONS DOES NOT NEED TO BE JUST IN FORMS - ACTIONS CAN BE IN FUNCTIONS AS WELL !
