npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli model:generate --name Book --attributes idUser:bigint,title:string