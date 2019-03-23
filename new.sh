echo "start";

if [ "$#" -ne 1 ]; then
  echo "Usage : ./new.sh newLambdaName optionalTemplateLambda";
  exit 1;
fi

newLambdaName=${1%/}; # Removes trailing slashes
optionalTemplateLambda=${2%/};



if [ -z "$newLambdaName" ]; then
    echo "You need to enter a name for your new Lambda function";
    exit 1;
fi

if [ -z "$optionalTemplateLambda" ]; then
    echo "No template folder named for Lambda. Using hello-lambda"
    optionalTemplateLambda="hello-lambda";
fi

if [ -d "$newLambdaName" ]; then
  echo "The $optionalTemplateLambda already exists. This script requires a folder that does not exist.";
  exit 1;
fi

mkdir "$newLambdaName"
cp "$optionalTemplateLambda\\index.js" "$newLambdaName";

cd "$newLambdaName";
npm init;
npm install;
cd "../";

# echo "$newLambdaName $newLambdaName";
# echo "optionalTemplateLambda? $optionalTemplateLambda";