class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :source
      t.text :description
      t.integer :category_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
