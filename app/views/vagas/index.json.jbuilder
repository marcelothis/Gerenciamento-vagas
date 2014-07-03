json.array!(@vagas) do |vaga|
  json.extract! vaga, :id, :titulo, :data, :descricao, :valor
  json.url vaga_url(vaga, format: :json)
end
