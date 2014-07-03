class Aluno < ActiveRecord::Base
  #Validação dos campos, todos são obrigatórios.
  validates :nome, :matricula, :cep, :rua, :numero, :bairro, :cidade, :estado, :celular, :telefone, :email, :senha, presence: true
  #Validação do e-mail e matrícula, esses dois campos tem que ser único no BD.
  validates :email, uniqueness: true
  validates :matricula, uniqueness: true
end
