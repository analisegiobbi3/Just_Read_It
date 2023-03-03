const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        book_cover: {
            type: DataTypes.STRING,
            allowNull: true

        },
        book_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
)

module.exports = Book;