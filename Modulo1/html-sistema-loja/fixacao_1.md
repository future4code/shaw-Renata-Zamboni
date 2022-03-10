~~~javascript

ˋˋˋfunction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salarioFixo = 2000
 const comissao = (100*qtdeCarrosVendidos) + (0.05*valorTotalVendas)
 const salarioFinal = salarioFixo+comissao
 
 return salarioFinal

}ˋˋˋ