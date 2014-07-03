class CreateEmpresas < ActiveRecord::Migration
  def change
    create_table :empresas do |t|
      t.string :nome_fantasia
      t.string :razao_social
      t.string :cnpj
      t.string :cep
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
