const { DataTypes } = require("sequelize");
const { sequelize, config } = require("../database");

const Order = sequelize.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time_slot_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_user_order: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  config
);

module.exports = Order;
