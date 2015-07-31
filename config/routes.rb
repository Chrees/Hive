Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    member do
      put "like", to: "posts#upvote"
    end
  end
  get 'tags/:tag', to: 'posts#index', as: :tag

  root "posts#index"
end
