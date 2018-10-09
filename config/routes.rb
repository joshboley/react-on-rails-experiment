Rails.application.routes.draw do
  scope '/api', module: 'api' do
    resources :todos
  end
end
