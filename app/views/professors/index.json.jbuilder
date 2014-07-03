json.array!(@professors) do |professor|
  json.extract! professor, :id, :nome, :matricula, :cep, :rua, :numero, :bairro, :cidade, :estado, :celular, :telefone, :email, :senha
  json.url professor_url(professor, format: :json)
end
