class Vaga < ActiveRecord::Base
  validates :titulo, :valor, :data, :descricao, presence: true
end
