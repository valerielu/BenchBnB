class AddBenchSeats < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :seats, :integer
  end
end
