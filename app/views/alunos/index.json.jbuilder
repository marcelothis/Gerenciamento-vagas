json.array!(@alunos) do |aluno|
  json.extract! aluno, :id, :nome, :matricula, :cep, :rua, :numero, :bairro, :cidade, :estado, :celular, :telefone, :email, :senha
  json.url aluno_url(aluno, format: :json)
end
