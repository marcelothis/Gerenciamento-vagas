json.array!(@empresas) do |empresa|
  json.extract! empresa, :id, :nome_fantasia, :razao_social, :cnpj, :cep, :cep, :rua, :numero, :bairro, :cidade, :estado, :celular, :telefone, :email, :senha
  json.url empresa_url(empresa, format: :json)
end
