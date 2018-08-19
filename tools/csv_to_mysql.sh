# This bash will create a sql file with the proper tables according to the csv provided.
#
# INSTALLATION
# To use it, you must have csvkit installed.
# To install csvkit type in the terminal:
# pip install csvkit
#
# USAGE
# To call this bash, you must provide the name of the csv to be read.
# Example: sh ./csv_to_mysql.sh name_of_file.csv

# If preferable, you can provide the name of the output.
# Example: sh./csv_to_mysql.sh name_of_file.csv name_of_destiny.sql

if [ $# -eq 0 ]
    then
        echo "No arguments supplied! Provide the name of the csv to be used."
fi

if [ $# -eq 1]
    then
        csvsql --dialect mysql --snifflimit 100000 $1 > table.sql
        echo "Successfully saved csv as table.sql on this directory."
else
    csvsql --dialect mysql --snifflimit 100000 $1 > $2
    echo "Successfully saved csv as $2 on this directory."
fi