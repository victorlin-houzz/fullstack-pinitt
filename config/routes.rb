Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      get "followers", on: :collection
      get "followees", on: :collection
    end
    resources :boards, only: [:index, :show, :create, :update, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy] 
    resource :follow, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
