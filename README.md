# AWS-Lambda-Node
One project to develop multiple lambda functions

# DO's
Do use bash as the console for this project.

# Windows Users
If you're using Visual Studio Code, you can change your preferred terminal for this project by going to:
- File -> Preferences -> Settings -> Workspace Settings -> Terminal Integrated Shell
-- The value you enter will be the path to your bash shell, typically C:\Program Files\Git\bin\bash.exe 
- Restart VS Code after entering your setting. Next time you load the project the shell will ask you for permission to use Bash within VS Code. Click OK, then restart VS Code again. Bash should now show as your terminal.

## Additional Tools for Windows
You will need to try different things on your Windows instance, but I find installing the following tools have helped at different times:
- Enable Windows Subsystem for Linux under Windows features
- AWS CLI: https://aws.amazon.com/cli/
- Gow (Gnu On Windows): https://github.com/bmatzelle/gow/releases
-- Might need a system restart for this to work
- AWS SDK for Python: pip install boto3

# DON'Ts
Don't delete the hello-lambda folder unless you build your own template folder. The new.sh script uses the hello-lambda folder as the default template for creating new Lambda functions.

# Conventions
Each subfolder here is its own Lambda function and should be treated as its own NPM project as well.

For example, if you are going to work in the hello-lambda Lambda function, you will need to:
```bash
cd hello-lambda
# make your changes
npm install
```

Once you are ready to deploy those changes, you will need to:
```bash
cd ../
./build.sh hello-lambda
```

More on build.sh below.

# Scripts

## buid.sh
This script allows you to build and deploy any of your lambda functions in the project. The command is as follows:
```bash
./build.sh lambdaFolderName deployYesOrNo
```

For example, if you want to build and deploy the hello-lambda Lambda function, your command will be:
```bash
./build.sh hello-lambda yes
```

If you want to build but not deploy:
```bash
./build.sh hello-lambda no
```

Credit for build.sh goes to Sam Williams on his post here: https://medium.freecodecamp.org/aws-lambda-offering-developers-ultimate-flexibility-d8939ff4220

### A Note on Deployment
The Lambda function in AWS will need to have the same name as the folder of the Lambda function in your project. If you want to deploy hello-lambda, then your Lambda function in AWS will need to be just that: hello-lambda

Simple, right?

## new.sh
Use this script to create a new lambda function based an existing template. The default template is hello-lambda, which is why we don't want you to delete that particular folder in your own project. The syntax for the command is:
```bash
./new.sh newLambdaName optionalTemplate
```

If you want to create a Lambda function called "sample-lambda" and use the default template, your command will be:
```bash
./new.sh sample-lambda
```

If you later want to use sample-lambda as your template for another new Lambda function called "third-function", your command will be:
```bash
./new.sh third-function sample-lambda
```