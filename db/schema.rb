# encoding: UTF-8

ActiveRecord::Schema.define(version: 20160114195627) do
  enable_extension "plpgsql"

  create_table "jobs", force: :cascade do |t|
    t.string   "company"
    t.string   "email"
    t.date     "date_posted"
    t.date     "date_emailed"
    t.string   "email_template"
    t.string   "addressed_to"
    t.text     "notes"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "position"
    t.string   "location"
    t.integer  "salary"
    t.string   "status"
  end

end
