class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.string :company
      t.string :email
      t.date :date_posted
      t.date :date_emailed
      t.string :email_template
      t.string :addressed_to
      t.text :notes

      t.timestamps null: false
    end
  end
end
