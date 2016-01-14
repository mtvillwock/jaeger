class AddPositionToJobs < ActiveRecord::Migration
  def self.up
    add_column :jobs, :position, :string
    add_column :jobs, :location, :string
    add_column :jobs, :salary, :integer
    add_column :jobs, :status, :string
  end

  def self.down
    remove_column :jobs, :position
    remove_column :jobs, :location
    remove_column :jobs, :salary, :integer
    remove_column :jobs, :status
  end
end
