Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :benches, only: [:create, :index, :show]
    resources :users, only: [:create]
    # resource :session, only: [:create, :destroy]
  end
  
  post '/api/session', to: "api/session#create"
  delete '/api/session', to: "api/session#destroy"

end
