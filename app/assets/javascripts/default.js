function backgroundEsqueceuSenha() {
	$(".backgroundEsqueceuSenha").show();
	$("#dialog").show();
}

function check(){
	var check = $("#checkTodos:checked").length;
	if (check == 1){
		$(".checks").attr('checked', 'checked');
	}
	else{
		$(".checks").removeAttr('checked');
	}
}

function backgroundEsqueceuSenha() {
	$(".backgroundEsqueceuSenha").show();
	$(".ui-dialog").show();
}

function fecharDialog(){
	$(".ui-dialog").hide();
	$(".backgroundEsqueceuSenha").hide();

}

function enviarEmailNovaSenha(){
	$(".backgroundEsqueceuSenha").hide();
	$(".ui-dialog").hide();
	alert("ok!");
}

$(document).ready(function(){
	$("#aluno_celular").mask("(99) 9999-9999");
	$("#aluno_telefone").mask("(99) 9999-9999");
	$("#aluno_cep").mask("99999-999");
	$("#aluno_cpf").mask("999.999.999-99");
	$("#empresa_cnpj").mask("99.999.999/9999-99");
	$("#empresa_celular").mask("(99) 9999-9999");
	$("#empresa_telefone").mask("(99) 9999-9999");
	$("#empresa_cep").mask("99999-999");
	$("#empresa_cnpj").mask("99.999.999/9999-99");
	$("#professor_cnpj").mask("99.999.999/9999-99");
	$("#professor_celular").mask("(99) 9999-9999");
	$("#professor_telefone").mask("(99) 9999-9999");
	$("#professor_cep").mask("99999-999");
	
});


function getEndereco(){
	$("#aluno_cep").blur(function(e){
    	if($.trim($("#aluno_cep").val()) != ""){
			    $.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#aluno_cep").val(), function(){
			    $("#aluno_rua").val(unescape(resultadoCEP["logradouro"]));
			    $("#aluno_bairro").val(unescape(resultadoCEP["bairro"]));
			    $("#aluno_cidade").val(unescape(resultadoCEP["cidade"]));
			    var nomeestado=(unescape(resultadoCEP["uf"]));
				$("#aluno_estado").val(nomeestado);
			    console.log(nomeestado);
    		});
		}
	})
}


function getEnderecoEmpresa(){
	$("#empresa_cep").blur(function(e){
    	if($.trim($("#empresa_cep").val()) != ""){
			    $.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#empresa_cep").val(), function(){
			    $("#empresa_rua").val(unescape(resultadoCEP["logradouro"]));
			    $("#empresa_bairro").val(unescape(resultadoCEP["bairro"]));
			    $("#empresa_cidade").val(unescape(resultadoCEP["cidade"]));
			    var nomeestado=(unescape(resultadoCEP["uf"]));
				$("#empresa_estado").val(nomeestado);
			    console.log(nomeestado);
    		});
		}
	})
}


function getEnderecoProfessor(){
	$("#professor_cep").blur(function(e){
    	if($.trim($("#professor_cep").val()) != ""){
			    $.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#professor_cep").val(), function(){
			    $("#professor_rua").val(unescape(resultadoCEP["logradouro"]));
			    $("#professor_bairro").val(unescape(resultadoCEP["bairro"]));
			    $("#professor_cidade").val(unescape(resultadoCEP["cidade"]));
			    var nomeestado=(unescape(resultadoCEP["uf"]));
				$("#professor_estado").val(nomeestado);
			    console.log(nomeestado);
    		});
		}
	})
}
