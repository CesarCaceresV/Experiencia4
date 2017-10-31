module.exports = {
    pushearlibro: function(req, res){
        var milibro = {
            nombrelibro: req.body.nombrelibro,
            cantidadlibrolujo: req.body.cantidadlibrolujo ? parseInt(req.body.cantidadlibrolujo) : 0,
            cantidadlibrobolsillo: req.body.cantidadlibrobolsillo ? parseInt(req.body.cantidadlibrobolsillo) : 0
        }
        console.log("kaboom baby! (body)",milibro)
        Libro.create(milibro).exec(function(err, newLibro){
            if(err){
                console.log("kaboom baby! (no se insertó el libro)",err)
            }else{
                console.log("kaboom baby! (Yo pago la primera ronda)")
            }
            res.redirect("/");
        });
    },
    leerLibros: function(req, res, next){
        Libro.find({}).exec(function(err, mostrarLibros){
            if(err){
                console.log("No sirvió")
            }else{
                res.view("mostrarLibros", {
                    listalibros: mostrarLibros
                })
            }
        })
    }
}