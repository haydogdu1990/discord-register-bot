module.exports={
    name:"disconnected",
    execute(client){
        client.logger.info("Veritabanı: bağlantısı devredışı");
    },
};