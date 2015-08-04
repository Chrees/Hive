class AddStylingOptionToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :css, :string
  end
end
