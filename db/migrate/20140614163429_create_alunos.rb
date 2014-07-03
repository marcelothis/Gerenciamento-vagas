class CreateAlunos < ActiveRecord::Migration
  def change
    create_table :alunos do |t|
      t.string :nome
      t.string :matricula
      t.string :cep
      t.string :rua
      t.string :numero
      t.string :bairro
      t.string :cidade
      t.string :estado
      t.string :celular
      t.string :telefone
      t.string :email
      t.string :senha

      t.timestamps
    end
  end
end
