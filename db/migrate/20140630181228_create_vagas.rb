class CreateVagas < ActiveRecord::Migration
  def change
    create_table :vagas do |t|
      t.string :titulo
      t.date :data
      t.text :descricao
      t.string :valor

      t.timestamps
    end
  end
end
