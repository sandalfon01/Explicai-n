var nacion=
{
  pais:'japon',
  capital:'tokio',
  annio:'660 ac',
  lengua:'japones',
  deportes:['kendo', 'karate', 'kenpo', 'ninjitsu'],
  caracteristicas:
  {
    alturaPromedio:'1,65',
    comidaTipica:['ramen','onigiri', 'sashimi', 'sushi', 'sopa de mizo', 'udon', 'soba', 'takoyaky'],
    anteriorCapital:'Kioto',
  }
  set monteMasAlto(monte)
  {
    this.pais= this.pais +' '+ this.capital +' '+ this.lengua +' '+monte;
  }
};

pais.monteMasAlto="Fuji"
console.log(nacion.pais);
