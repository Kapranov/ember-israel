Rails.application.routes.draw do

  get 'assets/index'
  resources :stories
  root to: "assets#index"
end
